import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {
    onSearch: (searchText : string) => void
}
function SearchInput( { onSearch} : Props) {

    const inputRef = useRef<HTMLInputElement>( null);

    const handleSubmit = ( event : React.FormEvent ) => {
        event.preventDefault();
        if(inputRef.current) onSearch(inputRef.current?.value)
    }
  return (
    <form onSubmit={ (evt)=>handleSubmit(evt)}>
    <InputGroup>
        <InputLeftElement children={ <BsSearch />} />
        <Input ref={inputRef} borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
    </form>
  )
}

export default SearchInput
